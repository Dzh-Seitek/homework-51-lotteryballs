import type {PropsWithChildren} from "react";

interface Props extends PropsWithChildren {
    number: number;
}

const LotteryBall = (props: Props) => {
    return (
        <div className={'ball'}>
            <p className={'ball-num'}>{props.number}</p>
        </div>
    )
}

export default LotteryBall;