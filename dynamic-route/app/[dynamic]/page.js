export async function generateStaticParams(){
    return [{dynamic:"about"},{dynamic:"contact"},{dynamic:"home"}]
}

export default function dynamic({params}) {
    return (
        <div className="p-24">
            <h2>This is a Dynamic route name - <span className="font-bold">{params.dynamic}</span></h2>
        </div>
    )
}