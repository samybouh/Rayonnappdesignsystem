import svgPaths from "./svg-69m838gsbz";

function Container() {
  return (
    <div className="bg-[#8e51ff] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="basis-0 grow h-[28px] min-h-px min-w-px relative shrink-0" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-start relative w-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#7f22fe] text-[21px] text-nowrap whitespace-pre">Mon Quotidien</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[28px] relative shrink-0 w-[174.578px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[14px] h-[28px] items-center relative w-[174.578px]">
        <Container />
        <Heading />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3a1180} id="Vector" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M8.75 1.45833V2.91667" id="Vector_2" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M8.75 14.5833V16.0417" id="Vector_3" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p3968cee0} id="Vector_4" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p2d4da140} id="Vector_5" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M1.45833 8.75H2.91667" id="Vector_6" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M14.5833 8.75H16.0417" id="Vector_7" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p129cc840} id="Vector_8" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p11baee00} id="Vector_9" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[14px] relative shrink-0 w-[39.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14px] relative w-[39.781px]">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[14px] left-0 text-[#f54900] text-[10.5px] top-[-1px] w-[40px]">Rayon 3</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[16.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-[16.828px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-neutral-950">⚡</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[70px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-full items-center relative w-[70px]">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Container2() {
  return <div className="bg-gradient-to-r from-[#fdc700] h-[3.5px] rounded-[3.35544e+07px] shrink-0 to-[#ff6900] w-full" data-name="Container" />;
}

function Container3() {
  return (
    <div className="bg-[#fff085] h-[3.5px] relative rounded-[3.35544e+07px] shrink-0 w-[70px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[3.5px] items-start overflow-clip pl-0 pr-[57.5px] py-0 relative rounded-[inherit] w-[70px]">
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow h-[22.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.75px] h-[22.75px] items-start relative w-full">
        <Container1 />
        <Container3 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 grow h-[40.75px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#ffdf20] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[40.75px] items-center px-[12.5px] py-[2px] relative w-full">
          <Icon />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1cc4b700} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p33c82000} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[28px] relative rounded-[3.35544e+07px] shrink-0 w-[31.5px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-center justify-center relative w-[31.5px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2b899180} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p4c1f200} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[28px] relative rounded-[3.35544e+07px] shrink-0 w-[31.5px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-center justify-center relative w-[31.5px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[40.75px] relative shrink-0 w-[203.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[40.75px] items-center relative w-[203.5px]">
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[83.75px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[83.75px] items-center justify-between pb-px pt-0 px-[21px] relative w-full">
          <Button />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[211px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-[211px]">
        <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#1e2939] text-[12.25px]">Navigation</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[10.5px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M4.66667 1.16667V3.5" id="Vector" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 1.16667V3.5" id="Vector_2" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#fdc700] h-[31.5px] relative rounded-[12.75px] shrink-0 w-full" data-name="Button">
      <Icon3 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-[35px] text-[#1e2939] text-[10.5px] text-nowrap top-[7.75px] whitespace-pre">Dashboard</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[10.5px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p37d56272} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[31.5px] relative rounded-[12.75px] shrink-0 w-full" data-name="Button">
      <Icon4 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-[35px] text-[#364153] text-[10.5px] text-nowrap top-[7.75px] whitespace-pre">Mes dossiers</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[10.5px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_4_308)" id="Icon">
          <path d="M7 10.5V2.91667" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p3eb6dd00} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p26a45d00} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p31cfe900} id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p19c5ab40} id="Vector_5" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p341a1c00} id="Vector_6" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p794fbc0} id="Vector_7" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p23402500} id="Vector_8" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_4_308">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[31.5px] relative rounded-[12.75px] shrink-0 w-full" data-name="Button">
      <Icon5 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-[35px] text-[#364153] text-[10.5px] text-nowrap top-[7.75px] whitespace-pre">Mes méthodes</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[10.5px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_4_304)" id="Icon">
          <path d="M7.58333 12.25H12.25" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p3988f700} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_4_304">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[31.5px] relative rounded-[12.75px] shrink-0 w-full" data-name="Button">
      <Icon6 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-[35px] text-[#364153] text-[10.5px] text-nowrap top-[7.75px] whitespace-pre">Journal de bord</p>
    </div>
  );
}

function App1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[211px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.5px] h-full items-start relative w-[211px]">
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[205px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[28px] h-[205px] items-start pl-[11.5px] pr-px py-[11.5px] relative w-full">
          <App />
          <App1 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[706px] items-start left-[21px] overflow-clip top-[21px] w-[234px]" data-name="Container">
      <Card />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-[93.797px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.5px] items-start relative w-[93.797px]">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[24.5px] relative shrink-0 text-[#1e2939] text-[17.5px] text-nowrap whitespace-pre">Ma journée</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p398b0380} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function App2() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-[462.5px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.5px] items-center justify-between relative w-[462.5px]">
        <Heading1 />
        <Icon7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#00bc7d] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1e2939] text-[14px] text-nowrap top-[-1px] whitespace-pre">Cours de Mathématiques</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-0 text-[#4a5565] text-[12.25px] top-[-2px] w-[70px]">08:00 - 10:00</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[38.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[59.5px] relative rounded-[12.75px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10.5px] h-[59.5px] items-center px-[10.5px] py-0 relative w-full">
          <Container8 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#2b7fff] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1e2939] text-[14px] text-nowrap top-[-1px] whitespace-pre">Pause déjeuner</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-0 text-[#4a5565] text-[12.25px] top-[-2px] w-[70px]">12:00 - 13:00</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 grow h-[38.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[59.5px] relative rounded-[12.75px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10.5px] h-[59.5px] items-center px-[10.5px] py-0 relative w-full">
          <Container11 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#ad46ff] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1e2939] text-[14px] text-nowrap top-[-1px] whitespace-pre">Travail Personnel</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-0 text-[#4a5565] text-[12.25px] top-[-2px] w-[70px]">14:00 - 16:00</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow h-[38.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[59.5px] relative rounded-[12.75px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10.5px] h-[59.5px] items-center px-[10.5px] py-0 relative w-full">
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#fb2c36] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1e2939] text-[14px] text-nowrap top-[-1px] whitespace-pre">Sport</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-0 text-[#4a5565] text-[12.25px] top-[-2px] w-[70px]">18:00 - 19:30</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow h-[38.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[59.5px] relative rounded-[12.75px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10.5px] h-[59.5px] items-center px-[10.5px] py-0 relative w-full">
          <Container17 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f0b100] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1e2939] text-[14px] text-nowrap top-[-1px] whitespace-pre">Temps libre</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-0 text-[#4a5565] text-[12.25px] top-[-2px] w-[70px]">20:00 - 21:30</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 grow h-[38.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[59.5px] relative rounded-[12.75px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10.5px] h-[59.5px] items-center px-[10.5px] py-0 relative w-full">
          <Container20 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function App3() {
  return (
    <div className="h-[325.5px] relative shrink-0 w-[462.5px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7px] h-[325.5px] items-start overflow-clip pl-0 pr-[7px] py-0 relative rounded-[inherit] w-[462.5px]">
        <Container10 />
        <Container13 />
        <Container16 />
        <Container19 />
        <Container22 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.8)] relative rounded-[21px] shrink-0" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[31.5px] items-start pb-px pl-[15px] pr-px pt-[15px] relative size-full">
          <App2 />
          <App3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[21px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[31.529px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.pf1aef80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.62738" />
          <path d="M15.7643 2.62738V5.25476" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.62738" />
          <path d="M15.7643 26.2738V28.9012" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.62738" />
          <path d={svgPaths.p32ae2c00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.62738" />
          <path d={svgPaths.p30bfa880} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.62738" />
          <path d="M2.62738 15.7643H5.25476" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.62738" />
          <path d="M26.2738 15.7643H28.9012" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.62738" />
          <path d={svgPaths.p36248100} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.62738" />
          <path d={svgPaths.p8cca100} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.62738" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[214.72px] rounded-[3.35544e+07px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[63.057px] top-[145.47px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function App4() {
  return (
    <div className="absolute h-[24.5px] left-[122.84px] top-[240px] w-[246.812px]" data-name="App">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24.5px] left-[123.5px] text-[#1e2939] text-[15.75px] text-center text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">Commencer ma session de travail</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2fe03400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[14px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-center text-nowrap whitespace-pre">Configuration personnalisée</p>
      </div>
    </div>
  );
}

function App5() {
  return (
    <div className="absolute content-stretch flex gap-[7px] h-[14px] items-center left-[170.59px] top-[296px] w-[151.297px]" data-name="App">
      <Icon9 />
      <Text2 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[10.5px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2fe03400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-gradient-to-r from-[#9810fa] h-[31.5px] left-[192px] rounded-[3.35544e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] to-[#8200db] top-[341.5px] w-[108.5px]" data-name="Button">
      <Icon10 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[38.5px] text-[12.25px] text-nowrap text-white top-[5px] whitespace-pre">Configurer</p>
    </div>
  );
}

function Card2() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(255,255,255,0.8)] relative rounded-[21px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[21px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container23 />
      <App4 />
      <App5 />
      <Button8 />
    </div>
  );
}

function Container24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[999px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[14px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-full relative w-[999px]">
        <Card1 />
        <Card2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-[104.297px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.5px] relative w-[104.297px]">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24.5px] left-0 text-[#1e2939] text-[15.75px] text-nowrap top-[-3px] whitespace-pre">Cette semaine</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p116d0080} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p2a6d1550} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function App6() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-[969px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.5px] items-center justify-between relative w-[969px]">
        <Heading2 />
        <Icon11 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24.5px] left-[116.13px] text-[#155dfc] text-[17.5px] text-center top-[-2px] translate-x-[-50%] w-[46px]">12.5h</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[14px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Temps étudié</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[24.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[24.5px] min-h-px min-w-px relative shrink-0 text-[#00a63e] text-[17.5px] text-center">8</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[14px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Sessions</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[24.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[24.5px] min-h-px min-w-px relative shrink-0 text-[#9810fa] text-[17.5px] text-center">5</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[14px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Jours consécutifs</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Paragraph14 />
      <Paragraph15 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[24.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[24.5px] min-h-px min-w-px relative shrink-0 text-[#d08700] text-[17.5px] text-center">245</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex h-[14px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">XP Total</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function App7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[969px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[14px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-full relative w-[969px]">
        <Container25 />
        <Container26 />
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[388.75px] size-[14px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p8832196} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M10.5 9.91667V5.25" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7.58333 9.91667V2.91667" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.66667 9.91667V8.16667" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function App8() {
  return (
    <div className="h-[14px] relative shrink-0 w-[969px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14px] relative w-[969px]">
        <Icon12 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-[409.75px] text-[#6a7282] text-[10.5px] text-nowrap top-[-1px] whitespace-pre">Cliquez pour voir plus de statistiques</p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[170px] relative rounded-[21px] shrink-0 w-[999px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[21px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[31.5px] h-[170px] items-start pl-[15px] pr-px py-[15px] relative w-[999px]">
        <App6 />
        <App7 />
        <App8 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[706px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Card3 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col h-[706px] items-start left-[276px] overflow-clip top-[21px] w-[999px]" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[14px] relative shrink-0 w-[14.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start relative w-[14.422px]">
        <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[10.5px] text-black">😊</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative rounded-[3.35544e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[35px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-[35px]">
        <Container31 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#1e2939] text-[12.25px]">Ray</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex h-[14px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-nowrap whitespace-pre">Ton assistant</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-[59.109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[31.5px] items-start relative w-[59.109px]">
        <Heading3 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function App9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[211px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-full items-center relative w-[211px]">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex h-[14px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#364153] text-[10.5px] text-nowrap whitespace-pre">Salut ! Comment se passe ta journée ? 🌟</p>
    </div>
  );
}

function App10() {
  return (
    <div className="bg-gray-50 h-[28px] relative rounded-[12.75px] shrink-0 w-[211px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[28px] items-start pb-0 pt-[7px] px-[7px] relative w-[211px]">
        <Paragraph19 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[51.53px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_4_273)" id="Icon">
          <path d={svgPaths.p29f44200} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_4_273">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#fef9c2] h-[31.5px] relative rounded-[12.75px] shrink-0 w-[211px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ffdf20] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.5px] relative w-[211px]">
        <Icon13 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-[76.03px] text-[10.5px] text-neutral-950 text-nowrap top-[7.75px] whitespace-pre">Discuter avec Ray</p>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[177px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[31.5px] h-[177px] items-start pl-[11.5px] pr-px py-[11.5px] relative w-full">
          <App9 />
          <App10 />
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7.58333 2.91667H12.25" id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7.58333 7H12.25" id="Vector_2" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7.58333 11.0833H12.25" id="Vector_3" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p3e975300} id="Vector_4" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p3217c00} id="Vector_5" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-[27.922px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.5px] relative w-[27.922px]">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24.5px] left-[14px] text-[#7f22fe] text-[17.5px] text-center top-[-2px] translate-x-[-50%] w-[28px]">2/5</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] h-[24.5px] items-center justify-center pl-0 pr-[0.016px] py-0 relative w-full">
          <Icon14 />
          <Paragraph20 />
        </div>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex h-[14px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Tâches terminées</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[55.45px] size-[10.5px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_4_288)" id="Icon">
          <path d={svgPaths.p36d47780} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p1ca0f580} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p3909b470} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_4_288">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Container">
      <Icon15 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-[112.95px] text-[#6a7282] text-[10.5px] text-center text-nowrap top-[-1px] translate-x-[-50%] whitespace-pre">Cliquez pour gérer</p>
    </div>
  );
}

function App11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[211px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.5px] h-full items-start relative w-[211px]">
        <Container34 />
        <Paragraph21 />
        <Container35 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[82.5px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[82.5px] items-start pl-[11.5px] pr-px py-[11.5px] relative w-full">
          <App11 />
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_4_268)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1426c1f0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p206e4880} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_4_268">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative rounded-[3.35544e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[28px]">
        <Icon16 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_4_260)" id="Icon">
          <path d={svgPaths.p11538bc0} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p252f1480} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.pa370560} id="Vector_3" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M1.75 9.625H8.75" id="Vector_4" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p314ea300} id="Vector_5" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p17a4d698} id="Vector_6" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_4_260">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[14px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start relative w-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#9f2d00] text-[10.5px] text-nowrap whitespace-pre">MISSION</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[14px] relative shrink-0 w-[58.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[14px] items-center relative w-[58.734px]">
        <Icon17 />
        <Text3 />
      </div>
    </div>
  );
}

function App12() {
  return (
    <div className="h-[28px] relative shrink-0 w-[211px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[28px] items-center relative w-[211px]">
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function App13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[211px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[211px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-0 text-[#9f2d00] text-[10.5px] top-[-1px] w-[195px]">Fais 3 exercices de maths en moins de 30 minutes</p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_4_257)" id="Icon">
          <path d={svgPaths.p9279940} id="Vector" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_4_257">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 grow h-[14px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14px] relative w-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[14px] left-0 text-[#d08700] text-[10.5px] top-[-1px] w-[36px]">+20 XP</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[14px] relative shrink-0 w-[49.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[14px] items-center relative w-[49.766px]">
        <Icon18 />
        <Text4 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative rounded-[3.35544e+07px] shrink-0 size-[7px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[7px]" />
    </div>
  );
}

function App14() {
  return (
    <div className="h-[14px] relative shrink-0 w-[211px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-center justify-between relative w-[211px]">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[149px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[28px] h-[149px] items-start pl-[11.5px] pr-px py-[11.5px] relative w-full">
          <App12 />
          <App13 />
          <App14 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[706px] items-start left-[1296px] overflow-clip top-[21px] w-[234px]" data-name="Container">
      <Card4 />
      <Card5 />
      <Card6 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[748px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container30 />
      <Container40 />
    </div>
  );
}

export default function RayOnnSauvegarde() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="RayOnn sauvegarde 25/10/2025" style={{ backgroundImage: "linear-gradient(151.333deg, rgb(190, 219, 255) 0%, rgb(203, 251, 241) 50%, rgb(255, 240, 133) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container6 />
      <Container41 />
    </div>
  );
}