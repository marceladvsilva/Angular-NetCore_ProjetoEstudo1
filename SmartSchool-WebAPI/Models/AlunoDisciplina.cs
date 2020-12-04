namespace SmartSchool_WebAPI.Models
{
    public class AlunoDisciplina
    {
        public AlunoDisciplina() { }
        public AlunoDisciplina(int alunoId, int dissciplinaId)
        {
            this.AlunoId = alunoId;
            this.DissciplinaId = dissciplinaId;
        }
        public int AlunoId { get; set; }
        public Aluno Aluno { get; set; }
        public Disciplina Disciplina { get; set; }
        public int DissciplinaId { get; set; }
    }
}