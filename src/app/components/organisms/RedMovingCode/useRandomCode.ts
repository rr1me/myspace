const useRandomCode = () => {
	const used: number[] = [];

	return () => getRandomCode(used);
};

export default useRandomCode;

const getRandomCode = (used: number[]): string => {
	const rand = Math.floor(Math.random() * availableCode.length);
	if (used.length === availableCode.length) return 'no';
	if (used.some(x=> x === rand)) return getRandomCode(used);

	used.push(rand);
	return availableCode[rand];
};

const cvSkillColumn = `
import { makeStyle } from '../../shared/utils';
import { Text, View } from '@react-pdf/renderer';
import Skill, { SkillType } from '../../atoms/Skill';

const s = makeStyle({
  column: {
    display: 'flex',
    gap: 10,
    flexGrow: 1,
  },
  inner: {
    display: 'flex',
  },
  sphere: {
    alignSelf: 'center',
    fontSize: 10,
  },
});

type ChildrenWithDirection = {
  horizontal: boolean;
  elem: SkillColumnChildren;
};
type SkillColumnChildren =
  | SkillType
  | SkillType[]
  | ChildrenWithDirection
  | ChildrenWithDirection[];

const SkillColumn = ({
  sphere,
  children,
}: {
  sphere: string;
  children: SkillColumnChildren;
}) => {
  return (
    <View style={s.column}>
      <Text style={s.sphere}>{sphere}</Text>

      <SkillColumnInner>{children}</SkillColumnInner>
    </View>
  );
};

export default SkillColumn;

const SkillColumnInner = ({
  children,
  horizontal = false,
}: {
  children: SkillColumnChildren | ChildrenWithDirection[];
  horizontal?: boolean;
}) => {
  return (
    <>
      {children.constructor === Array ? (
        <View
          style={{
            ...s.inner,
            ...(horizontal
              ? { flexDirection: 'row', gap: 5 }
              : { flexDirection: 'column', gap: 3 }),
          }}
        >
          {typeof (children as ChildrenWithDirection[])[0]
            .horizontal !== 'undefined'
            ? children.map((x, i) => (
                <SkillColumnInner
                  key={i}
                  horizontal={(x as ChildrenWithDirection).horizontal}
                >
                  {(x as ChildrenWithDirection).elem}
                </SkillColumnInner>
              ))
            : children.map((x, i) => (
                <Skill key={i}>{x as SkillType}</Skill>
              ))}
        </View>
      ) : typeof (children as ChildrenWithDirection).horizontal !==
        'undefined' ? (
        <SkillColumnInner
          horizontal={(children as ChildrenWithDirection).horizontal}
        >
          {(children as ChildrenWithDirection).elem}
        </SkillColumnInner>
      ) : (
        <Skill>{children as SkillType}</Skill>
      )}
    </>
  );
};`;
const cppMagnitude = `
#include <iostream>
#include <vector>
#include <algorithm>

class ComplexNumber {
  public:
    ComplexNumber(double real, double imag) : real(real), imag(imag) {}

    ComplexNumber operator+(const ComplexNumber& other) {
        return ComplexNumber(this->real + other.real, this->imag + other.imag);
    }

    void print() {
        std::cout << real;
        if (imag >= 0) {
            std::cout << " + " << imag << "i";
        } else {
            std::cout << " - " << -imag << "i";
        }
        std::cout << std::endl;
    }

    double getMagnitude() {
        return std::sqrt(real * real + imag * imag);
    }

  private:
    double real;
    double imag;
};

int main() {
    std::vector<ComplexNumber> complexNumbers;

    complexNumbers.push_back(ComplexNumber(3.0, 4.0));
    complexNumbers.push_back(ComplexNumber(1.0, -2.0));
    complexNumbers.push_back(ComplexNumber(-5.0, 1.0));

    std::cout << "Original Complex Numbers:" << std::endl;
    for (const ComplexNumber& num : complexNumbers) {
        num.print();
    }

    std::sort(complexNumbers.begin(), complexNumbers.end(), [](const ComplexNumber& a, const ComplexNumber& b) {
        return a.getMagnitude() < b.getMagnitude();
    });

    std::cout << "\\nSorted Complex Numbers by Magnitude:" << std::endl;
    for (const ComplexNumber& num : complexNumbers) {
        num.print();
    }

    return 0;
}`;
const pyHacky = `
from cryptography.fernet import Fernet

class SecureDataHandler:
    def __init__(self, key):
        self.fernet = Fernet(key)

    def encrypt_data(self, data):
        return self.fernet.encrypt(data.encode())

    def decrypt_data(self, encrypted_data):
        return self.fernet.decrypt(encrypted_data).decode()

class Task:
    def __init__(self, task_name, task_description, key):
        self.data_handler = SecureDataHandler(key)
        self.task_name = task_name
        self.task_description = task_description
        self.encrypted_data = self.data_handler.encrypt_data(f"{task_name}: {task_description}")

    def get_decrypted_task(self):
        return self.data_handler.decrypt_data(self.encrypted_data)

class TaskScheduler:
    def __init__(self, key):
        self.tasks = []
        self.key = key

    def add_task(self, task_name, task_description):
        task = Task(task_name, task_description, self.key)
        self.tasks.append(task)

    def view_tasks(self):
        decrypted_tasks = [task.get_decrypted_task() for task in self.tasks]
        return decrypted_tasks

if __name__ == "__main__":
    secret_key = '4PQYmRKHkN0sBcMzDgeG2cCkJdgbpD5gBwBpL6IuKo0='

    scheduler = TaskScheduler(secret_key)

    while True:
        choice = input("1: Add a task, 2: View tasks, 3: Exit. Enter the option number: ")

        if choice == "1":
            task_name = input("Enter the task name: ")
            task_description = input("Enter the task description: ")
            scheduler.add_task(task_name, task_description)
        elif choice == "2":
            tasks = scheduler.view_tasks()
            for i, task in enumerate(tasks, start=1):
                print(f"Task {i}: {task}")
        elif choice == "3":
            break
        else:
            print("Invalid choice.")
`;
const asm = `
section .data
    fmt db "%d", 10, 0
    max db 2

section .bss
    result resb 4

section .text
    global _start

_start:
    call srand
    call rand
    xor     edx, edx
    mov     ecx, max
    div     ecx
    mov     [result], eax
    mov     ebx, eax
    mov     eax, 1
    int     0x80

srand:
    pushad
    mov     eax, 0x0
    mov     ebx, 0x0
    call    time
    popad
    ret

rand:
    pushad
    mov     eax, 0x0
    call    random
    popad
    ret

time:
    pushad
    mov     eax, 0x13
    mov     ebx, 0x0
    call    sys_call
    popad
    ret

sys_call:
    int     0x80
    ret
`;
const csharp = `
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;

class ChatServer
{
    private TcpListener server;
    private List<ChatClient> clients = new List<ChatClient>();

    public ChatServer(int port)
    {
        server = new TcpListener(IPAddress.Any, port);
        server.Start();
    }

    public void Start()
    {
        while (true)
        {
            TcpClient client = server.AcceptTcpClient();
            ChatClient chatClient = new ChatClient(client, this);
            clients.Add(chatClient);
            Thread clientThread = new Thread(chatClient.HandleClient);
            clientThread.Start();
        }
    }

    public void BroadcastMessage(string message, ChatClient sender)
    {
        foreach (var client in clients)
        {
            if (client != sender)
                client.SendMessage(message);
        }
    }

    public void RemoveClient(ChatClient client)
    {
        clients.Remove(client);
    }
}

class ChatClient
{
    private TcpClient client;
    private ChatServer server;
    private NetworkStream stream;
    private string username;

    public ChatClient(TcpClient client, ChatServer server)
    {
        this.client = client;
        this.server = server;
        stream = client.GetStream();
    }

    public void HandleClient()
    {
        byte[] buffer = new byte[1024];
        int bytesRead;

        username = ReadMessage();

        while (true)
        {
            try
            {
                bytesRead = stream.Read(buffer, 0, buffer.Length);
                if (bytesRead == 0)
                    break;
                string message = Encoding.UTF8.GetString(buffer, 0, bytesRead);
                server.BroadcastMessage($"{username}: {message}", this);
            }
            catch (Exception)
            {
                break;
            }
        }

        server.RemoveClient(this);
        client.Close();
    }

    public void SendMessage(string message)
    {
        byte[] data = Encoding.UTF8.GetBytes(message);
        stream.Write(data, 0, data.Length);
    }

    public string ReadMessage()
    {
        byte[] buffer = new byte[1024];
        int bytesRead = stream.Read(buffer, 0, buffer.Length);
        return Encoding.UTF8.GetString(buffer, 0, bytesRead);
    }
}
`;
const cil = `
.assembly extern mscorlib { }
.assembly AdvancedMathCalculator { }
.module AdvancedMathCalculator.exe

.method private hidebysig static void Main() cil managed
{
  .entrypoint
  .maxstack 2

  ldstr "Welcome to the Advanced Math Calculator!"
  call void [mscorlib]System.Console::WriteLine(string)

  call int32 AdvancedMathCalculator::Add(int32, int32)
  call void [mscorlib]System.Console::WriteLine(int32)
  call float32 AdvancedMathCalculator::Multiply(float32, float32)
  call void [mscorlib]System.Console::WriteLine(float32)
  call float64 AdvancedMathCalculator::Divide(float64, float64)
  call void [mscorlib]System.Console::WriteLine(float64)

  call int32 AdvancedMathCalculator::Factorial(int32)
  call void [mscorlib]System.Console::WriteLine(int32)

  ret
}

.method public hidebysig static int32 Add(int32 a, int32 b) cil managed
{
  .maxstack 2
  ldarg.0
  ldarg.1
  add
  ret
}

.method public hidebysig static float32 Multiply(float32 a, float32 b) cil managed
{
  .maxstack 2
  ldarg.0
  ldarg.1
  mul
  ret
}

.method public hidebysig static float64 Divide(float64 a, float64 b) cil managed
{
  .maxstack 2
  ldarg.0
  ldarg.1
  div
  ret
}

.method public hidebysig static int32 Factorial(int32 n) cil managed
{
  .maxstack 2
  ldarg.0
  ldc.i4.1
  bge factorial_loop
  ldc.i4.1
  ret

factorial_loop:
  ldarg.0
  ldarg.0
  ldc.i4.1
  sub
  call int32 AdvancedMathCalculator::Factorial(int32)
  mul
  ret
}
`;

const availableCode: string[] = [
	cvSkillColumn,
	cppMagnitude,
	pyHacky,
	asm,
	csharp,
	cil
];
