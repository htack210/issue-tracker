const TailWindSettings =
  "bg-sky-500 rounded-lg hover:bg-sky-700 text-white px-4 py-2";

export const ThemeButton = () => {
  return "bg-sky-500 hover:bg-sky-700 px-4 py-2 rounded-lg text-white";
};

export const GenericButton = (instructions: any, title: any) => {
  return (
    <button className={TailWindSettings} {...instructions}>
      {title}
    </button>
  );
};
