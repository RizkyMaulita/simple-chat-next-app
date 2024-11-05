interface Props {
  isStart: boolean;
  message: string;
}

export default function ChatMessageRow({ isStart, message }: Props) {
  return (
    <div className={`chat py-2 ${isStart ? "chat-start" : "chat-end"}`}>
      {isStart ? (
        <>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="chat-bubble max-w-[75%] bg-slate-300 text-black">
            {message}
          </div>
          <div className="chat-footer opacity-50">13.50</div>
        </>
      ) : (
        <>
          <div className="chat-bubble max-w-[75%] bg-slate-300 text-black">
            {message}
          </div>
          <div className="chat-footer opacity-50">14.00</div>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
