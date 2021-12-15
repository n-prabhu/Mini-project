const AlertBox = (prop) => {
  const { message } = prop;
  return (
    <div class="alert alert-primary mx-5" role="alert">
      {message}
    </div>
  );
};
export default AlertBox;
