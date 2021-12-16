const AlertBox = (prop) => {
  const { message,status } = prop;
  let statusValue = "";
  if(status === ""){
    statusValue = "warning";
  }else{
    statusValue = status;
  }
  return (
    <div className={`alert alert-${statusValue} text-center`} role="alert">
      {message}
    </div>
  );
};
export default AlertBox;
