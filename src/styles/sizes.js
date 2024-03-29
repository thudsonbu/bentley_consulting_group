export default {
  down(size) {
    const sizes = {
      xs: "575.98px",
      sm: "767.98px",
      md: "991.98px",
      lg: "1199.98pz",
    };
    return `@media (max-width: ${sizes[size]})`;
  },
  up(size) {
    const sizes = {
      xs: "575.98px",
      sm: "767.98px",
      md: "991.98px",
      lg: "1199.98pz",
    };
    return `@media (min-width: ${sizes[size]})`;
  },
};
