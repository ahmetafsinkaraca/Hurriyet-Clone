import { useRef } from "react";
import clsx from "clsx";
import useLazyLoads from "./useLazyLoads.js";
import { ProductCard } from "./ProductCard.js";
import {Loader} from "./Loader.js";
import gundems from './gundem.json'

const NUM_PER_PAGE = 3;
const TOTAL_PAGES = 3;

export const Post = () => {
    const datas = gundems["data"];
    const triggerRef = useRef(null);
    const onGrabData = (currentPage) => {
        // This would be where you'll call your API
        return new Promise((resolve) => {
        setTimeout(() => {
            const data = datas.slice(
            ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
            NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
            );
            console.log(data);
            resolve(data);
        }, 100);
        });
    };
    const { data, loading } = useLazyLoads({ triggerRef, onGrabData });
    return (
        <>
        <div className="grid grid-cols-1s">
        {data.map(image => {
            return <ProductCard image={image["image"]} title={image["title"]} description={image["description"]} updateDate={image["updateDate"]} hastag={image["hastag"]}/>
        })}
        </div>
        <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
            <Loader />
        </div>
        </>
    );
}