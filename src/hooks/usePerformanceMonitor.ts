import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  renderTime: number;
  componentName: string;
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics[] = [];
  private readonly MAX_METRICS = 100;

  logRender(componentName: string, renderTime: number) {
    if (this.metrics.length >= this.MAX_METRICS) {
      this.metrics.shift(); // Remove oldest metric
    }

    this.metrics.push({
      componentName,
      renderTime,
      timestamp: Date.now()
    });
  }

  getMetrics() {
    return this.metrics;
  }

  getAverageRenderTime(componentName?: string) {
    const filteredMetrics = componentName 
      ? this.metrics.filter(m => m.componentName === componentName)
      : this.metrics;

    if (filteredMetrics.length === 0) return 0;

    const total = filteredMetrics.reduce((sum, metric) => sum + metric.renderTime, 0);
    return total / filteredMetrics.length;
  }

  getSlowestComponents(limit = 10) {
    const componentAverages = new Map<string, { total: number; count: number }>();

    this.metrics.forEach(metric => {
      const existing = componentAverages.get(metric.componentName) || { total: 0, count: 0 };
      componentAverages.set(metric.componentName, {
        total: existing.total + metric.renderTime,
        count: existing.count + 1
      });
    });

    return Array.from(componentAverages.entries())
      .map(([name, { total, count }]) => ({
        componentName: name,
        averageRenderTime: total / count,
        renderCount: count
      }))
      .sort((a, b) => b.averageRenderTime - a.averageRenderTime)
      .slice(0, limit);
  }

  clear() {
    this.metrics = [];
  }
}

const performanceMonitor = new PerformanceMonitor();

export const usePerformanceMonitor = (componentName: string) => {
  const renderStartTime = useRef<number>();

  useEffect(() => {
    renderStartTime.current = performance.now();
  });

  useEffect(() => {
    if (renderStartTime.current) {
      const renderTime = performance.now() - renderStartTime.current;
      performanceMonitor.logRender(componentName, renderTime);
    }
  });

  return {
    getMetrics: () => performanceMonitor.getMetrics(),
    getAverageRenderTime: (name?: string) => performanceMonitor.getAverageRenderTime(name),
    getSlowestComponents: (limit?: number) => performanceMonitor.getSlowestComponents(limit)
  };
};

// Development-only performance logging
if (process.env.NODE_ENV === 'development') {
  // Log performance metrics every 30 seconds
  setInterval(() => {
    const slowest = performanceMonitor.getSlowestComponents(5);
    if (slowest.length > 0) {
      console.group('🐌 Slowest Components');
      slowest.forEach(({ componentName, averageRenderTime, renderCount }) => {
        console.log(`${componentName}: ${averageRenderTime.toFixed(2)}ms avg (${renderCount} renders)`);
      });
      console.groupEnd();
    }
  }, 30000);
}

export { performanceMonitor };