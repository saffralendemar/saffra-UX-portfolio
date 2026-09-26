/* Figma-generated artwork extracted from the original Claude Design export.
 * Treat as an illustration: edit the source design and re-export rather than hand-editing. */
import imgRectangle23 from '../../../assets/images/caa57dc4bea654ff1918964434d7303e6c408f7b.webp';
import imgFrameForScroll from '../../../assets/images/651d763c59d22b730ee4696f19eca6d7e067789e.png';
import imgFrameForScroll1 from '../../../assets/images/17a2c18a7d3a54907895425bbdf1a269cfc13ab5.png';
import imgSmallModalWindow from '../../../assets/images/22b01800fa393bebbc73d97e6ef9f73956a8cc19.png';

function LargeModalWindow3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[475.834px] left-[calc(50%-233.38px)] rounded-[7.553px] top-[calc(50%-177.84px)] w-[604.234px]" data-name="Large Modal Window">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[7.553px] size-full" src={imgFrameForScroll} />
    </div>
  );
}

function FrameForScroll1() {
  return (
    <div className="absolute h-[465px] left-[473px] rounded-[10px] shadow-[-12px_14px_28.7px_0px_rgba(0,0,0,0.25)] top-[284px] w-[598px]" data-name="Frame for Scroll">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute h-[104.69%] left-[-1.3%] max-w-none top-[-1.94%] w-[102.63%]" src={imgFrameForScroll1} />
      </div>
    </div>
  );
}

function SmallModalWindow() {
  return (
    <div className="absolute h-[316px] left-[249px] rounded-[10px] shadow-[0px_6px_10px_4px_rgba(0,0,0,0.15),0px_2px_3px_0px_rgba(0,0,0,0.3)] top-[482px] w-[260px]" data-name="Small Modal Window">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute h-[104.75%] left-[-3.28%] max-w-none top-[-1.35%] w-[106.56%]" src={imgSmallModalWindow} />
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="absolute h-[833px] left-[101px] top-[-387.74px] w-[1071px]">
      <LargeModalWindow3 />
      <FrameForScroll1 />
      <SmallModalWindow />
    </div>
  );
}

function TryPrototype() {
  return (
    <div className="relative h-[500px] rounded-[25px] shrink-0 w-full" data-name="Try Prototype">
      <div className="absolute h-[500px] left-0 top-0 w-[1274px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="500" src={imgRectangle23} width="1274" />
      </div>
      <Frame90 />
    </div>
  );
}

export default TryPrototype;
