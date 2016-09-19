package file;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.channels.FileChannel;
import java.util.Date;

/**
 * 
 *@author taoshengQiao
 * 
 * @description ���ùܵ��������ļ�
 * 
 */
public class bigFileCopy {
	// ���建�����Ĵ�С����Ϊһ��������
	static final int size = 1048576;

	public static void main(String[] args) throws Exception {
		long startTime = System.currentTimeMillis();
		//Դ�ļ���Ŀ���ļ���·��
		String path1 = "e:/abc/a.txt";
		String path2 = "e:/abc/ox.txt";
		File sorFile = new File(path1);
		File disFile = new File(path2);
		//���Ʒ�������ʱ��
		System.out.println("��������ʱ��Ϊ��"+bigCopy(sorFile, disFile)+"s");
		System.out.println("���ִ��ʱ��Ϊ��" + (System.currentTimeMillis() - startTime) / 1000f + "s");
	}

	/**
	 * 
	 */
	public static float bigCopy(File f1, File f2) throws Exception {
		// ��ÿ�ʼ������ʱ��
		long startTime = System.currentTimeMillis();
		
		// 1M�Ļ�����
		int length = size;
		FileInputStream in = new FileInputStream(f1);
		FileOutputStream out = new FileOutputStream(f2);
		FileChannel fin = in.getChannel();
		FileChannel fout = out.getChannel();
		while (true) {
			if (fin.position() == fin.size()) {
				fin.close();
				fout.close();
				// �ļ�������ϣ��ر���������ܵ����ʱ�䣬����������ʱ��
				return (System.currentTimeMillis()-startTime)/1000f;
			}
			if ((fin.size() - fin.position()) < size)
				length = (int) (fin.size() - fin.position());
			else
				length = size;
			fin.transferTo(fin.position(), length, fout);
			fin.position(fin.position() + length);
		}
	}
}
