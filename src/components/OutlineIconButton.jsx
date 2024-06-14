import IconButton from '@mui/material/IconButton';

export default function OutlineIconButton({ className, onClick, children }) {
  const style = {
    color: 'common.white',
    bgcolor: 'primary.main',
    m: 1,
    '&:hover': {
      bgcolor: 'primary.dark',
    },
  };

  return (
    <IconButton
      sx={style}
      size="small"
      className={className}
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
}
