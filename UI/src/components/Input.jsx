const Input = ({ name = "", id = "", wide = "w-full", readonly = false, refe = null , inpValue = null, inpWide = "w-full" }) => {

    const capitalizedWord = id.charAt(0).toUpperCase() + id.substring(1)
  return (
    <div className={wide + " mb-3"}>
        <label htmlFor={id}>{capitalizedWord}</label>
        <div className={inpWide +" h-8"}>
          <input readOnly={readonly} ref={refe} defaultValue={inpValue} className={"dark:text-black size-full bg-[#dedede] outline-none px-3"} type="text" name={name} id={id} placeholder={capitalizedWord} />

        </div>
    </div>
  );
};

export default Input;
