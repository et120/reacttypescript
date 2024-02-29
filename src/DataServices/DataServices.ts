import Astronaut from "../Interfaces/Iinterface";

const getData = async () => {
    const promise = await fetch('http://api.open-notify.org/astros.json');
    const data: Astronaut = await promise.json();

    return data;
}

export default getData