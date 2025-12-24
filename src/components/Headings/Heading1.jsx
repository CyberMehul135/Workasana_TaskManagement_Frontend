import Button from "../Buttons/Button";

export default function Heading1({
  heading,
  subHeading,
  btnLabel,
  btnIcon,
  onBtnClick,
  className,
}) {
  return (
    <div className={`flex items-center justify-between gap-4 ${className}`}>
      <div>
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="mt-1 text-sm text-text-primary font-medium">
          {subHeading}
        </p>
      </div>
      {btnLabel && (
        <Button
          label={btnLabel}
          icon={btnIcon}
          onClick={onBtnClick}
          className="max-w-[170px] w-fit justify-center py-2 max-[480px]:rounded-full max-[480px]:size-13"
          labelStyle={`max-[480px]:hidden`}
          iconStyle={`max-[480px]:text-2xl`}
        />
      )}
    </div>
  );
}
