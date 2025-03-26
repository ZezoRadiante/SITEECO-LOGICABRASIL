
import React from 'react';

interface StatCardProps {
  title: string;
  value: number;
  digits: string[];
  prefix?: string;
  suffix?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  digits, 
  prefix = '+', 
  suffix = '' 
}) => {
  return (
    <div className="stats-card relative overflow-hidden">
      <div className="p-6 rounded-lg border-2 border-eco-300 bg-eco-50/70 shadow-md flex flex-col items-center justify-center transition-all hover:shadow-lg hover:border-eco-400">
        <div className="text-earth-700 text-4xl md:text-5xl font-bold mb-4 flex items-center">
          <span className="text-eco-800">{prefix}</span>
          <span className="counter-value">
            {digits.length > 0 ? 
              digits.map((digit, idx) => (
                <span key={idx} className="digit-slot">
                  {digit.includes('|') ? 
                    digit.split('|').map((d, i) => (
                      <span key={i} className="digit" style={{opacity: i === 1 ? 1 : 0.3}}>
                        {d}
                      </span>
                    )) : 
                    digit
                  }
                </span>
              )) : 
              new Intl.NumberFormat('pt-BR').format(value)
            }
            {suffix && <> {suffix}</>}
          </span>
        </div>
        <p className="text-earth-600 text-lg md:text-xl text-center" dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br />') }} />
      </div>
    </div>
  );
};
