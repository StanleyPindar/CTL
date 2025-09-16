import React, { useState, useEffect } from 'react';
import { BarChart3, Clock, Zap, X } from 'lucide-react';
import { performanceMonitor } from '../../hooks/usePerformanceMonitor';
import { cacheService } from '../../services/cacheService';

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [cacheStats, setCacheStats] = useState<any>({});

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const interval = setInterval(() => {
      setMetrics(performanceMonitor.getSlowestComponents(10));
      setCacheStats(cacheService.getStats());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (process.env.NODE_ENV !== 'development' || !isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Show Performance Monitor"
      >
        <BarChart3 className="h-5 w-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Zap className="h-5 w-5 mr-2 text-blue-600" />
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Cache Stats */}
      <div className="mb-4 p-3 bg-blue-50 rounded-lg">
        <h4 className="font-medium text-blue-800 mb-2">Cache Performance</h4>
        <div className="text-sm text-blue-700 space-y-1">
          <div>Hit Rate: {(cacheStats.hitRate * 100).toFixed(1)}%</div>
          <div>Valid Items: {cacheStats.validItems}</div>
          <div>Total Items: {cacheStats.totalItems}</div>
        </div>
      </div>

      {/* Render Performance */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          Slowest Components
        </h4>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {metrics.slice(0, 5).map((metric, index) => (
            <div key={index} className="text-xs bg-gray-50 p-2 rounded">
              <div className="font-medium">{metric.componentName}</div>
              <div className="text-gray-600">
                {metric.averageRenderTime.toFixed(2)}ms avg ({metric.renderCount} renders)
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => {
            performanceMonitor.clear();
            cacheService.clear();
          }}
          className="flex-1 px-3 py-1 bg-red-100 text-red-800 rounded text-xs font-medium hover:bg-red-200"
        >
          Clear Data
        </button>
        <button
          onClick={() => {
            console.table(metrics);
            console.log('Cache Stats:', cacheStats);
          }}
          className="flex-1 px-3 py-1 bg-gray-100 text-gray-800 rounded text-xs font-medium hover:bg-gray-200"
        >
          Log to Console
        </button>
      </div>
    </div>
  );
};

export default PerformanceMonitor;