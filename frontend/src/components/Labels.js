import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import "./Labels.css"

export default function Labels() {
    const { labels, updateLabel } = useContext(GlobalContext);
    return (
        <React.Fragment>
            <p className={"top"}>Label</p>
            {labels.map(({ label: lbl, checked }, idx) => (
                <label key={idx} className="label">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() =>
                            updateLabel({ label: lbl, checked: !checked })
                        }
                        className={`text-${lbl} focus:ring-0 input`}
                    />
                    <span className="candidate ml-2 text-gray-700 capitalize">{lbl}</span>
                </label>
            ))}
        </React.Fragment>
    );
}
