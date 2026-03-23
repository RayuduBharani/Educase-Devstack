import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-[40px] w-full min-w-0 rounded-[6px] border border-[#CBCBCB] bg-white px-3 text-[14px] leading-[19px] font-normal text-[#1D2226] transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#1D2226] placeholder:text-[#919191] focus-visible:border-[#6C25FF] focus-visible:ring-2 focus-visible:ring-[#6C25FF]/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-[#F2F3F5] disabled:text-[#9AA0A5] disabled:opacity-100 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }
