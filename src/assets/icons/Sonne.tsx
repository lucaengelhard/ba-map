import { SVGProps, Ref, forwardRef } from "react";

const SvgComponent = (
  { simplified, ...props }: SVGProps<SVGSVGElement> & { simplified?: boolean },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Ebene 2"
    viewBox="0 0 591.14 591.14"
    ref={ref}
    {...props}
  >
    {simplified ? (
      <path d="M331.25 280.79 515.02 97.02l-20.9-20.9-183.77 183.77V0h-29.56v259.89L97.02 76.12l-20.9 20.9 183.77 183.77H0v29.56h259.89L76.12 494.12l20.9 20.9 183.77-183.77v259.89h29.56V331.25l183.77 183.77 20.9-20.9-183.77-183.77h259.89v-29.56H331.25z" />
    ) : (
      <path d="m370.19 280.79 204.27-84.21-11.26-27.33-204.87 84.46L515.02 97.02l-20.9-20.9-156.24 156.24 84.9-204-27.29-11.35-85.14 204.58V0h-29.56v220.95L196.58 16.68l-27.33 11.26 84.46 204.87L97.02 76.12l-20.9 20.9 156.24 156.24-204-84.9-11.35 27.29 204.58 85.14H0v29.56h220.95L16.68 394.56l11.26 27.33 204.87-84.46L76.12 494.12l20.9 20.9 156.24-156.24-84.9 204 27.29 11.35 85.14-204.58v221.59h29.56V370.19l84.21 204.27 27.33-11.26-84.46-204.87 156.69 156.69 20.9-20.9-156.24-156.24 204 84.9 11.35-27.29-204.58-85.14h221.59v-29.56H370.19z" />
    )}
  </svg>
);
const Sonne = forwardRef(SvgComponent);
export default Sonne;
