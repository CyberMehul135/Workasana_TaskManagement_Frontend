import { CopyMinus, Mail, Plus, Users } from "lucide-react";
import ProfileBadge from "../Badges/ProfileBadge";
import Button from "../Buttons/Button";
import TeamDetailsLoading from "../Loadings/TeamDetailsLoading";

export default function TeamDetails({
  data,
  loading,
  error,
  onClickAddMembers,
  onClickDeleteMembers,
}) {
  if (loading) return <TeamDetailsLoading />;
  if (error) return <p>Error...</p>;
  if (data) {
    return (
      <article>
        <div className="p-6 mb-6 bg-surface-white border border-border-primary rounded-xl flex items-center justify-between gap-5 ">
          <div className="flex items-center gap-5">
            <Users
              size={32}
              className="text-text-blue-400 m-4 max-sm:m-0 max-sm:w-7"
            />
            <div>
              <h2 className="text-xl font-medium mb-2 max-sm:m-0 max-sm:font-bold">
                {data.name}
              </h2>
              <p className="text-sm text-text-primary max-sm:hidden">
                {data.description}
              </p>
            </div>
          </div>
          <Button
            label="Add Member"
            icon={Plus}
            onClick={onClickAddMembers}
            className="max-w-[170px] w-fit justify-center py-2 max-[480px]:rounded-full max-[480px]:size-13"
            labelStyle={`max-[480px]:hidden `}
            iconStyle={`max-[480px]:text-2xl w-4`}
          />
        </div>

        <div className="p-6 bg-surface-white border border-border-primary rounded-xl">
          <h2 className="text-lg font-medium mb-6">Team Members</h2>
          <div className="grid grid-cols-2 gap-y-8 gap-x-5 max-md:grid-cols-2 max-sm:grid-cols-1">
            {data?.members?.map((member) => (
              <div
                key={member._id}
                className="flex justify-between items-center gap-2 max-w-[380px] max-sm:max-w-full"
              >
                <div className="flex items-center gap-2 ">
                  <ProfileBadge
                    user={member}
                    className="size-10 bg-surface-blue-300! text-text-blue-400! font-semibold text-base!"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">{member.name}</h3>
                    <div className="flex items-center gap-1">
                      <Mail size={13} className="text-text-primary" />
                      <span className="text-xs text-text-primary">
                        {member.email}
                      </span>
                    </div>
                  </div>
                </div>

                <CopyMinus
                  className="text-text-red-300 cursor-pointer active:scale-95"
                  size={22}
                  strokeWidth={2}
                  onClick={() => onClickDeleteMembers(data.members, member._id)}
                />
              </div>
            ))}
          </div>
        </div>
      </article>
    );
  }
}
