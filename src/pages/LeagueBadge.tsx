import { useParams } from "react-router-dom";
import { useGetBadge } from "../hooks/useGetBadge";

export const LeagueBadge = () => {
  const { id } = useParams<{ id: string }>();
  const badge = useGetBadge(Number(id));

  return (
    <div>
      <h4>LeagueBadge</h4>
      {badge && <img src={badge} alt="league badge" />}
    </div>
  );
};
