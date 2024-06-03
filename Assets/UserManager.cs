using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class UserManager : MonoBehaviour
{
    public TMP_InputField usernameRegisterInput;
    public TMP_InputField passwordRegisterInput;
    public TMP_InputField ageRegisterInput;
    public TMP_InputField genderRegisterInput;
    public Button registerButton;

    public TMP_InputField usernameLoginInput;
    public TMP_InputField passwordLoginInput;
    public Button loginButton;

    public TMP_InputField newPasswordInput;
    public Button changePasswordButton;

    public TMP_InputField newUsernameInput;
    public Button changeUsernameButton;

    public TMP_InputField ageChangeInput;
    public Button changeAgeButton;

    public TMP_InputField genderChangeInput;
    public Button changeGenderButton;

    public Button exitToLogin;
    public Button deleteAccount;

    public GameObject registerPanel;
    public GameObject loginPanel;
    public GameObject changeDataPanel;
    public GameObject confirmationPopup;
    public TMP_Text confirmationMessageText;
    public Button confirmationYesButton;
    public Button confirmationNoButton;
    public TMP_Text messageText;

    public GameObject messageBOX;
    public TMP_Text textMSGBOX;
    public Button confirmMSGBUTTON;

    public TMP_Text usuarioNome;
    public TMP_Text idadeNumero;
    public TMP_Text Genero;

    public string username;
    public string password;
    public string age;
    public string gender;

    public TMP_Text displayNome;
    public TMP_Text displayIdade;
    public TMP_Text displaySexo;

    public Text userInfoUsernameText;
    public Text userInfoAgeText;

    private string loggedInUsername;
    private string loggedInAge;
    private string loggedInGender;

    public TMP_Text usernameTEXTAPP;

     private void Start()
    {
        registerButton.onClick.AddListener(() => ShowConfirmation("Deseja registrar?", Register));
        loginButton.onClick.AddListener(Login);
        changePasswordButton.onClick.AddListener(() => ShowConfirmation("Deseja alterar a senha?", ChangePassword));
        changeUsernameButton.onClick.AddListener(() => ShowConfirmation("Deseja alterar o nome de usuário?", ChangeUsername));
        changeAgeButton.onClick.AddListener(() => ShowConfirmation("Deseja alterar idade?", ChangeAge));
        changeGenderButton.onClick.AddListener(() => ShowConfirmation("Deseja alterar o gênero?", ChangeGender));
        exitToLogin.onClick.AddListener(() => ShowConfirmation("Deseja sair para a tela de login:", logoutapp));
        deleteAccount.onClick.AddListener(() => ShowConfirmation("Deseja deletar a conta? \n Esta ação não pode ser desfeita!", deleteAccountApp));

    }

    private void Register()
    {
        string  username = usernameRegisterInput.text;
        string  password = passwordRegisterInput.text;
        string  age = ageRegisterInput.text;
        string  gender = genderRegisterInput.text;

        if (PlayerPrefs.HasKey(username))
        {
            ShowMessageBOX("Nome de usuário já existe!");
            return;
        }

        PlayerPrefs.SetString(username + "_password", password);
        PlayerPrefs.SetString(username + "_age", age);
        PlayerPrefs.SetString(username + "_gender", gender);

       // messageText.text = "Registrado com sucesso!";
        ShowMessageBOX("Registrado com sucesso!");

        usernameRegisterInput.text = "";
        passwordRegisterInput.text = "";
        ageRegisterInput.text = "";
        genderRegisterInput.text = "";
    }

    private void Login()
    {
        username = usernameLoginInput.text;
        password = passwordLoginInput.text;

        if (PlayerPrefs.HasKey(username + "_password") && PlayerPrefs.GetString(username + "_password") == password)
        {
           
            
            ShowUserInfo();
            


            // mudar tela
            gameObject.GetComponent<navConfigs>().TelaBoasVindas1();
           

}
        else
        {
            ShowMessageBOX("Nome de usuário ou senha incorretos!");
        }
    }


  

   



    private void ChangePassword()
    {
        username = usernameLoginInput.text;
        string newPassword = newPasswordInput.text;

        if (PlayerPrefs.HasKey(username + "_password"))
        {
            PlayerPrefs.SetString(username + "_password", newPassword);
           // messageText.text = "Senha alterada com sucesso!";
            ShowMessageBOX("Senha alterada com sucesso!");
            newPasswordInput.text = "";
        }
        else
        {
            ShowMessageBOX("Usuário não encontrado!");
          //  messageText.text = "Usuário não encontrado!";
        }
    }

    private void ChangeUsername()
    {
        string oldUsername = usernameLoginInput.text;
        string newUsername = newUsernameInput.text;

        if (PlayerPrefs.HasKey(newUsername + "_password"))
        {
            ShowMessageBOX("Nome de usuário já existe!");
           // messageText.text = "Nome de usuário já existe!";

            return;
        }

        if (PlayerPrefs.HasKey(oldUsername + "_password"))
        {
            string password = PlayerPrefs.GetString(oldUsername + "_password");
            string age = PlayerPrefs.GetString(oldUsername + "_age");
            string gender = PlayerPrefs.GetString(oldUsername + "_gender");

            PlayerPrefs.SetString(newUsername + "_password", password);
            PlayerPrefs.SetString(newUsername + "_age", age);
            PlayerPrefs.SetString(newUsername + "_gender", gender);

            PlayerPrefs.DeleteKey(oldUsername + "_password");
            PlayerPrefs.DeleteKey(oldUsername + "_age");
            PlayerPrefs.DeleteKey(oldUsername + "_gender");

            ShowMessageBOX("Nome de usuário alterado com sucesso!");
            usernameLoginInput.text = newUsernameInput.text;
            newUsernameInput.text = "";
            // messageText.text = "Nome de usuário alterado com sucesso!";
        }
        else
        {
            ShowMessageBOX("Usuário não encontrado!");
           // messageText.text = "Usuário não encontrado!";
        }
    }

    private void ChangeGender()
    {
        string username = usernameLoginInput.text;
        string newGender = genderChangeInput.text;

        if (PlayerPrefs.HasKey(username + "_password"))
        {
            PlayerPrefs.SetString(username + "_gender", newGender);

            ShowMessageBOX("Gênero alterado com sucesso!");
            genderChangeInput.text = "";
            // messageText.text = "Idade e sexo alterados com sucesso!";
        }
        else
        {
            ShowMessageBOX("Usuário não encontrado!");
          //  messageText.text = "Usuário não encontrado!";
        }
    }

    private void ChangeAge()
    {
        string username = usernameLoginInput.text;
        string newAge = ageChangeInput.text;

        if (PlayerPrefs.HasKey(username + "_password"))
        {
            PlayerPrefs.SetString(username + "_age", newAge);

            ShowMessageBOX("Idade alterada com sucesso!");
            ageChangeInput.text = "";
            // messageText.text = "Idade e sexo alterados com sucesso!";
        }
        else
        {
            ShowMessageBOX("Usuário não encontrado!");
            //  messageText.text = "Usuário não encontrado!";
        }
    }

    public void ShowUserInfo()
    {
        loggedInUsername = username;
        loggedInAge = PlayerPrefs.GetString(username + "_age");
        loggedInGender = PlayerPrefs.GetString(username + "_gender");

        usuarioNome.text = loggedInUsername;
        idadeNumero.text = loggedInAge;
        Genero.text = loggedInGender;

        usernameTEXTAPP.text = loggedInUsername;

        // loginPanel.SetActive(false);
        // registerPanel.SetActive(false);
        //changeDataPanel.SetActive(false);
        //userInfoPanel.SetActive(true);
    }

    private void ShowConfirmation(string message, UnityEngine.Events.UnityAction confirmAction)
    {
        confirmationMessageText.text = message;
        confirmationPopup.SetActive(true);

        confirmationYesButton.onClick.RemoveAllListeners();
        confirmationYesButton.onClick.AddListener(() => {
            confirmAction.Invoke();
            confirmationPopup.SetActive(false);
        });

        confirmationNoButton.onClick.RemoveAllListeners();
        confirmationNoButton.onClick.AddListener(() => {
            confirmationPopup.SetActive(false);
        });
    }

    private void ShowMessageBOX(string message)
    {
        messageBOX.SetActive(true);
        textMSGBOX.text = message;
      
        confirmMSGBUTTON.onClick.RemoveAllListeners();
        confirmMSGBUTTON.onClick.AddListener(() => {
            messageBOX.SetActive(false);
        });
    }
    

    private void logoutapp()
    {
        gameObject.GetComponent<navConfigs>().TelaInicial();
        usernameLoginInput.text = "";
        passwordLoginInput.text = "";
    }

    private void deleteAccountApp()
    {
        if (!string.IsNullOrEmpty(loggedInUsername))
        {
            PlayerPrefs.DeleteKey(loggedInUsername + "_password");
            PlayerPrefs.DeleteKey(loggedInUsername + "_age");
            PlayerPrefs.DeleteKey(loggedInUsername + "_gender");

            loggedInUsername = null;
            loggedInAge = null;
            loggedInGender = null;

            ShowMessageBOX("Conta deletada com sucesso!");
            gameObject.GetComponent<navConfigs>().TelaInicial();
            usernameLoginInput.text = "";
            passwordLoginInput.text = "";
            // messageText.text = "Conta deletada com sucesso!";
        }
        else
        {
            ShowMessageBOX("Nenhum usuário logado!");
            
        }
    }


   
}
