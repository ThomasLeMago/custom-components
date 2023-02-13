import { render } from "react-dom"
import styles from "./breadcrumb.module.css"

type Crumbs = {
    index: number
    value: string |number
}

type CrumbProps = {
    paths: Crumbs[],
}

let renderTo = 2;

export function Breadcrumb ({ paths }: CrumbProps) {

    function updateCrumbs(p: Crumbs) {
        renderTo = p.index;
        
        let startIndex = (p.index === 0) ? 1 : p.index;

        for (var i = startIndex; i < paths.length; i++) {
            let element = document.getElementById(i.toString());
            if (element) {
                element.style.display = "none";
            }
        }

        
    }

    function isLast(index: number) {
        if (paths.length - 1 === index) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
            <ol>
                <li key="" className={`${styles.crumb}`}>{paths.map(p => {
                    
                    if (p.index <= renderTo) {
                        return (
                            <span id={p.index.toString()} className={`${isLast(p.index) ? "" : styles.highlighted}`} onClick={() => updateCrumbs(p)}> {p.value} /</span>
                        )
                    }

                    return
                    
                })}</li>
            </ol>
        </div>
    )
}