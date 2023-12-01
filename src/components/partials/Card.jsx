function TagColor({ tags }) {
  const toReturn = [];
  const colorsTag = {
    php: 'bg-red-400',
    css: 'bg-orange-400',
    js: 'bg-yellow-400',
    html: 'bg-blue-400',
  };
  tags.forEach((tag, i) => {
    const color = colorsTag[tag] ?? 'bg-gray-400';

    toReturn.push(
      <li
        key={i}
        className={`mr-2 inline-block rounded-lg p-1 text-xs md:text-sm ${color}`}
      >
        {tag}
      </li>,
    );
  });
  return toReturn;
}

export default function card(props) {
  return (
    <div className="max-w-[600px] rounded-lg bg-white">
      <div className="flex max-w-[600px] items-center justify-center rounded-t-lg">
        <img className="rounded-t-lg" src={props.image} alt="" />
      </div>
      <div className="p-4 text-left ">
        <h1 className="md:text-2xl">{props.title}</h1>
        <p className="my-4 text-sm md:text-base">{props.content}</p>
        <ul>
          <TagColor tags={props.tags} />
        </ul>
        <span>{props.published}</span>
        <br />
        <button className="mt-4 bg-orange-400 p-2 text-sm text-white">
          LEGGI DI PIÙ
        </button>
      </div>
    </div>
  );
}
