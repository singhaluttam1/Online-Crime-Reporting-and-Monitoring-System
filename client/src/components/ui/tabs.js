import React, { useState } from 'react';

export function Tabs({ children, defaultValue, className = '' }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const tabs = React.Children.map(children, (child) =>
    child.type.displayName === 'TabsTrigger' ? child.props.value : null
  ).filter(Boolean);

  const renderedContent = React.Children.toArray(children).filter(
    (child) => child.type.displayName === 'TabsContent' && child.props.value === activeTab
  );

  const triggers = React.Children.toArray(children).filter(
    (child) => child.type.displayName === 'TabsTrigger'
  );

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2 border-b mb-4">
        {triggers.map((trigger, idx) =>
          React.cloneElement(trigger, {
            isActive: trigger.props.value === activeTab,
            onClick: () => setActiveTab(trigger.props.value),
            key: idx,
          })
        )}
      </div>
      {renderedContent}
    </div>
  );
}

export function TabsList({ children, className = '' }) {
  return <div className={`flex gap-2 flex-wrap ${className}`}>{children}</div>;
}

export function TabsTrigger({ children, value, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
        isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
      }`}
    >
      {children}
    </button>
  );
}
TabsTrigger.displayName = 'TabsTrigger';

export function TabsContent({ children, value }) {
  return <div className="mt-4">{children}</div>;
}
TabsContent.displayName = 'TabsContent';