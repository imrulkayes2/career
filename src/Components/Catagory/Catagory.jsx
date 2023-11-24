
const Catagory = ({ catagory }) => {
    const { logo, category_name, availability } = catagory;
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

export default Catagory;