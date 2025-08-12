import { Component, QueryList, signal, ViewChildren } from '@angular/core';
import { TopicComponent } from '../topic/topic.component';
import { QuestionComponent } from '../question/question.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
interface QuestionItem {
  id: number;
  text: string;
}

@Component({
  selector: 'app-questionnaire',
  imports: [
    TopicComponent,
    CommonModule,
    QuestionComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css',
})
export class QuestionnaireComponent {
  topicName = '@ViewChildren() with Signals';

  questions = signal<QuestionItem[]>([
    { id: 1, text: 'What is your name?' },
    { id: 2, text: 'What is your favorite Language?' },
  ]);

  newQuestion = signal('');
  nextId = signal(2);
  checked = signal(false);

  @ViewChildren(QuestionComponent)
  questionComponets!: QueryList<QuestionComponent>;

  allAnswered = signal(false);
  removeQuestion(index: number) {
    this.questions.update((qlist) => qlist.filter((_, i) => i !== index));
  }
  addQuestion() {
    const questionText = this.newQuestion().trim();
    if (questionText) {
      this.questions.update((qlist) => [
        ...qlist,
        {
          id: this.nextId(),
          text: questionText,
        },
      ]);
      this.nextId.update((n) => n + 1);
      this.newQuestion.set('');
    }
  }
  checkAnswers() {
    this.checked.set(true);
    const all = this.questionComponets.toArray().every((q) => q.isAnswered());
    this.allAnswered.set(all);
  }
}
