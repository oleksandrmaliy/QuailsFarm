const MoreButton = ({ data, id, onClick }) => {
  return (
    <button
      id={id}
      className="px-4 py-1 text-yellow-200 bg-primaryColor rounded-xl"
      onClick={onClick}
    >
      {data ? 'Згорнути' : 'Читати більше'}
    </button>
  );
};

export default MoreButton;
