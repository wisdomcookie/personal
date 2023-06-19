import React from 'react'

// Format numerical date from YYYY-MM to 'MONTH YEAR'
export default function formatDate(date: string): string {

  const [year, month] = date.split('-');
  const formattedMonth = new Date(`${date}-01`).toLocaleString('default', { month: 'long'});
    
  return `${formattedMonth} ${year}`;
}
