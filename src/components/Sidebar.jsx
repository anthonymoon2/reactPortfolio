function Sidebar(){
    return(
        <div className="fixed left-[2.5%] bottom-[100px] flex flex-col text-[20px] font-bold text-center max-[576px]:bottom-[40px]">
            |
            <a href="https://www.linkedin.com/in/cu-anthonymoon/" target="_blank" rel="noopener noreferrer">
                <img className="h-[25px] transition-transform duration-300 hover:scale-[1.2]" src="images/linkedInImage.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/anthonymoon2" target="_blank" rel="noopener noreferrer">
                <img className="h-[25px] transition-transform duration-300 hover:scale-[1.2]" src="images/githubImage.png" alt="GitHub" />
            </a>
            |
        </div>
    )
}

export default Sidebar;

