export default function Title({title,subtitle}) {
    return (
        <>
            <div className="mx-10 text-center">
                <p className="text-dark-25 mb-0 font-black">{subtitle}</p>
                <h4 className="text-dark-100 mt-0 font-black">{title}</h4>
            </div>
            
        </>
    )
}
