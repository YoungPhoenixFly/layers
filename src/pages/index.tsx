import { type NextPage } from "next";
import { useState } from "react";
import { useCreateChannelMutation } from "../modules/channels/presentation/react/useCreateChannelMutation";
import { useFindAllChannelsQuery } from "../modules/channels/presentation/react/useFindAllChannelsQuery";

const Home: NextPage = () => {
  const [channelName, setChannelName] = useState("");
  const query = useFindAllChannelsQuery();
  const mutation = useCreateChannelMutation({
    onSuccess: () => {
      setChannelName("");
      query.refetch();
    },
  });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  return (
    <div className="text-center">
      <h1 className="mb-4 text-xl font-semibold">Channels</h1>
      <ul>
        {query.data.map((channel) => (
          <li key={channel.id}>{channel.name}</li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate({ name: channelName });
        }}
      >
        <input
          type="text"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
          className="rounded-md border border-gray-300"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Home;
