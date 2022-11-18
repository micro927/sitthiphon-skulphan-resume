import { Fade } from 'react-reveal'

export default function CardPersonal(props) {
    const Fullname = props.fullname
    return (
        <>
            <Fade>
                {Fullname}
            </Fade>
            <hr />
        </>
    )
}