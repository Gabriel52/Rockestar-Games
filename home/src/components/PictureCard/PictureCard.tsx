import Image from "next/image"

type Props = {
    alt: string;
    path: string;
    width: number;
    height: number;

}

export const PictureCard = ({width, height, alt, path}:Props)=>{
    return (
        <div>
            <Image alt={alt} src={path} width={width} height={height}/>
        </div>
    )
}