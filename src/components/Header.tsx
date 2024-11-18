import '../styles/header.css'; 

const Header = () => {
  return (
    <header>
        <div className="logo__container">
            <div className="logo logo__header"></div>
        </div>
        <div className="search__container">
            <input type="text" placeholder='Search...'/>
            <button><div className="loop__img"></div></button>
        </div>
        <div className="btn__container__header">
            <div className="heart__btn"></div>
            <div className="basket__btn"></div>
            <button className="sign__in button__small">Увійти</button>
        </div>
    </header>
  )
}
export default Header
