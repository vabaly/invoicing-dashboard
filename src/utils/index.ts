export function addCommasToNumber(num: number): string {
  // return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY',
  }).format(num);
}
