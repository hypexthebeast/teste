import AnimatedButton from "./AnimatedButton";

interface SubjectButtonsProps {
  onSubjectSelect: (subject: string) => void;
  isPremium?: boolean;
}

const SubjectButtons = ({ onSubjectSelect, isPremium = false }: SubjectButtonsProps) => {
  const subjects = [
    "Matemática",
    "História", 
    "Biologia",
    "Redação",
    "Física",
    "Química"
  ];

  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {subjects.map((subject, index) => (
        <AnimatedButton
          key={subject}
          onClick={() => onSubjectSelect(subject)}
          variant={isPremium ? "premium" : "default"}
          className="justify-center"
        >
          <span className="font-medium">{subject}</span>
        </AnimatedButton>
      ))}
    </div>
  );
};

export default SubjectButtons;