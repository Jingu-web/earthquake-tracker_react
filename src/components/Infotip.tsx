import { FC } from "react";
import { Tooltip } from "reactstrap";

export interface InfoTipProps {
  target: string;
  tooltipOpen: boolean;
  setTooltipOpen: (arg1: boolean) => void;
}

const InfoTip: FC<InfoTipProps> = ({ target, tooltipOpen, setTooltipOpen }) => {
  return (
    <Tooltip
      placement="bottom"
      isOpen={tooltipOpen}
      target={target}
      toggle={() =>
        tooltipOpen ? setTooltipOpen(false) : setTooltipOpen(true)
      }
    >
      {target === "starttime" ? "開始日" : "終了日"}を YYYY-MM-DD
      形式で入力して下さい。
    </Tooltip>
  );
};

export default InfoTip;
