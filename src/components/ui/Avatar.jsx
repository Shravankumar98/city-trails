const Avatar = ({ src, alt, size = "md" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`avatar avatar-${size}`}
    />
  );
};

export default Avatar;
