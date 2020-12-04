namespace SmartSchool_WebAPI.Models
{
    public class Disciplina
    {

        public Disciplina(){ }
        public Disciplina(int id, int nome, int professorId)
        {
            this.id = id;
            this.Nome = nome;
            this.ProfessorId = professorId;
            
        }
        public int id { get; set; }
        public int Nome { get; set; }
        public int ProfessorId { get; set; }
        public Professor Professor { get; set; }


    }
}