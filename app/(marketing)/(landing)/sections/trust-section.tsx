import { NumberTicker } from "@/components/ui/number-ticker"

export default function TrustSection() {
  return (
    <div className="container py-32">
      <div
        className="flex flex-wrap items-stretch text-center text-3xl font-bold
               rounded-3xl overflow-hidden border border-white
               bg-black/10 backdrop-blur-xs text-white
               [&>*]:border-[0.5px] [&>*]:border-white"
      >
        <div className="bg-white text-black grow basis-1/2 p-10">
          <p className="text-5xl font-bold">
            Trust is <span className="block text-primary">earned</span>
          </p>
        </div>

        <div className="grow basis-1/2 p-10">
          <p className="flex flex-col">
            <span className="text-5xl ">
              <NumberTicker value={40} className="text-white" />+
            </span>
            <span className="text-2xl">Clients</span>
          </p>
        </div>

        <div className="grow basis-1/2 p-10">
          <p className="flex flex-col">
            <span className="text-5xl">
              <NumberTicker value={9000} className="text-white" />
            </span>
            <span className="text-2xl">Invoices</span>
          </p>
        </div>

        <div className="grow basis-1/2 p-10">
          <p className="flex flex-col">
            <span className="text-5xl">
              $<NumberTicker value={850000} className="text-white" />+
            </span>
            <span className="text-2xl">Cleared amounts</span>
          </p>
        </div>
      </div>
    </div>
  )
}
