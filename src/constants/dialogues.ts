interface IConveration {
  key: "shan" | "fet";
  text: string;
}

const ShanFetConversation: IConveration[] = [
  {
    key: "shan",
    text: `That pesky queen is on the move. I have received intelligence that she's hiding in nearby quadrant alpha!`,
  },
  {
    key: "fet",
    text: `I will prepare the fleet, My lord. We will get her this time.`,
  },
  {
    key: "shan",
    text: `Purge those traitorous planets, this mutiny will be punished by the wrath of th EMPIRE!`,
  },
  {
    key: "fet",
    text: `I will gather my squadron and send my best men sir! Treachery of the RESISTANCE must be squashed!`,
  },
];

export const ShansVictoryDialogue =
  "I have Found you now Falcornia!! You will spend 15 years in exile! Think it over and join the EMPIRE or i will end you next time i find you!";

export const ShansLoseDialogue =
  "Ahhh! Damn the resistance! How can the entire fleet not find a single queen! Useless scums!";

export default ShanFetConversation;
