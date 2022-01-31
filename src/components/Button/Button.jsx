import './Button.css';

export default function Button(
  { children, onClick, width } = { width: '100px' }
) {
  return (
    <button
      className='default-button'
      onClick={onClick}
      style={{ width: width }}
    >
      {children}
    </button>
  );
}
