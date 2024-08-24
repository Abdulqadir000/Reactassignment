function Cards({ title, img, price, onPress }) {
  return (
    <div
      onClick={onPress}
      className="cursor-pointer lg:w-1/4 md:w-1/2 w-full p-3"
    >
      <div className="border shadow">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={img}
          />
        </a>
        <div className="mt-4 m-2">
          <div className="text-gray-900 title-font text-lg font-medium">
            {title}
          </div>
          <div className="mt-1"> {price} </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
