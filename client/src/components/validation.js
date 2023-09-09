const regexNameandSurname = /^[A-Za-z]+$/;
const regexImage =
  /^(http|https):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(?:\/[\w\-./?%&=]*)?$/;
// const regexFecha = /^\d{4}-\d{2}-\d{2}$/

const validation = (event, setErrors) => {
  console.log(event.value);
  if (event.name === "name") {
    if (!regexNameandSurname.test(event.value)) {
      console.log("1");
      setErrors((prevValue) => {
        return { ...prevValue, name: "El nombre no puede contener simbolos" };
      });
    } else {
      setErrors((prevValue) => {
        return { ...prevValue, name: "" };
      });
    }
  }
  if (event.name === "surname") {
    if (!regexNameandSurname.test(event.value)) {
      console.log("1");
      setErrors((prevValue) => {
        return {
          ...prevValue,
          surname: "El apellido no puede contener simbolos",
        };
      });
    } else {
      setErrors((prevValue) => {
        return { ...prevValue, surname: "" };
      });
    }
  }
  if (event.name === "nationality") {
    if (event.value.length < 3) {
      setErrors((prevValue) => {
        return { ...prevValue, nationality: "Debe ser mas larga" };
      });
    } else {
      setErrors((prevValue) => {
        return { ...prevValue, nationality: "" };
      });
    }
  }
  if (event.name === "image") {
    if (!regexImage.test(event.value)) {
      setErrors((prevValue) => {
        return { ...prevValue, image: "Debe que ser una direccion URL" };
      });
    } else {
      setErrors((prevValue) => {
        return { ...prevValue, image: "" };
      });
    }
  }

  if ((event.name === "dob")) {
    const fecha = new Date(event.value)
    console.log(fecha);
    const fechaHoy = new Date();

    const fechaMinima = new Date()
    fechaMinima.setFullYear(fechaHoy.getFullYear() -18)

    if(fecha > fechaMinima) {
        setErrors((prevValue) =>{
            return {...prevValue, dob: "Debe tener al menos 18 años" }
        })
    } else {
        setErrors((prevValue) => {
            return { ...prevValue, dob: "" };
          });
    }
}
};

export default validation;
