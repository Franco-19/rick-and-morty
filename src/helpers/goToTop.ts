export const goToTop = () => {
    if(window.scrollY > 400){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
};