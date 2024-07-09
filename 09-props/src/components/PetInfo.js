const PetInfo = (props) => {
    const {animal, age, isHappy} = props
    return(
        <h1>{animal} is {age} years old {isHappy}</h1>
    );
};

export default PetInfo;