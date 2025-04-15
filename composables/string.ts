export function toSlug(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .replace(/[^\w\s()-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}


export function formatVNDNumber(value: string): string {
  const convert = parseInt(value)
  return convert.toLocaleString('vi-VN');
}


