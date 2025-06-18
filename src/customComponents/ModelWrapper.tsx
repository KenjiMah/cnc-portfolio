export function ModelWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full max-w-[600px] aspect-[3/2] md:float-right md:ml-8 mb-6">
      {children}
    </div>
  );
}
