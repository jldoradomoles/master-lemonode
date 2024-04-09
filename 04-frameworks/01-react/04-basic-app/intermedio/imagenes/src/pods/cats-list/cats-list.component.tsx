import React, { Fragment } from "react";
import { catEntity } from "../cart/cats-list.vm";
import { ItemCard } from "../../components/itemCard.component";

interface Props {
    cats: catEntity[];
}

export const CatsListComponent: React.FC<Props> = (props) => {
    const { cats } = props;
    return (
        <>
            {cats.map((cat) => (
                <div className="cat-item">
                    <ItemCard
                        key={cat.id}
                        title={cat.title}
                        picUrl={cat.picUrl}
                        id={cat.id}
                    />
                </div>
            ))}
        </>
    );
};
